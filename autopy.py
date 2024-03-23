import os
import subprocess
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

# Set the path to the folder you want to monitor
folder_path = "."


class GitAutoCommitHandler(FileSystemEventHandler):
    def on_any_event(self, event):
        if event.is_directory:
            return
        elif event.event_type in ['created', 'modified']:
            print(f"Change detected: {event.src_path}")
            try:
                subprocess.run(['git', 'add', '.'], check=True)
                subprocess.run(['git', 'commit', '-m', 'Auto-commit'], check=True)
                subprocess.run(['git', 'push'], check=True)
                print("Changes committed and pushed successfully.")
            except subprocess.CalledProcessError as e:
                print(f"An error occurred: {e}")
            print()


if __name__ == "__main__":
    event_handler = GitAutoCommitHandler()
    observer = Observer()
    observer.schedule(event_handler, folder_path, recursive=True)
    print(f"Monitoring folder: {os.path.abspath(folder_path)}")
    observer.start()

    try:
        while True:
            pass
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
