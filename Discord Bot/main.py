import discord

TOKEN = ''#put the token of the server
intents = discord.Intents.default()
intents.message_content = True
intents.members = True
client = discord.Client(intents = intents)

@client.event
async def on_ready() :
    print("{0.user} is logged in".format(client))

@client.event
async def on_member_join(member):
    guild = client.get_guild() # put client ID inside brackets
    text_channel = guild.get_channel() # put channel ID inside brackets
    await text_channel.send(f"Welcome to Our Dsicord Channel {member.mention}! :cat: ")

@client.event
async def on_message(message) :
    username = str(message.author).split("#")[0]
    user_message = str(message.content)
    channel = str(message.channel.name)

    print(f'{username}: {user_message} ({channel})')

    if message.author == client.user :
        return
    if user_message.lower() == '/hello':
        await message.channel.send(f'Meow {message.author.mention}! :cat:')
        return
    elif user_message.lower() == '/bye':
        await message.channel.send(f'See you later, Meoww')
        return
    elif user_message.lower() == '/meow':
        await message.channel.send(f'Meoww Meoww')
        return
    elif user_message.lower() == '/how are you':
        await message.channel.send(f'I am humgry, feed me you fool')
        return




client.run(TOKEN)