#!/usr/bin/env python

import os
from random import choice, randint

from flask import Flask, render_template

app = Flask(__name__)

PRE_SWEAR = """
shit
crap
fuck
arse
shite
cunt
douche
piss
cock
scrote
twat
twunt
""".strip().splitlines()

POST_WORD = """
weasel
muppet
waffle
splat
gibbon
trumpet
ferret
boner
bubble
muffin
fiddle
crumpet
biscuit
cake
burger
pimple
beetle
badger
mole
toad
""".strip().splitlines()

POST_SWEAR = """
shitter
fucker
pisser
crapper
""".strip().splitlines()

PRE_WORD = """
crab
mole
cake
muffin
crumpet
muppet
muffin
gibbon
bunny
toad
slug
blobfish
""".strip().splitlines()


POST_ADJECTIVE = """
eyed
toed
handed
mouthed
breathing
drinking
eating
licking
""".strip().splitlines()


def adjective():
    return '{}-{}'.format(choice(PRE_SWEAR), choice(POST_ADJECTIVE))


def noun():
    if randint(0, 2) < 2:
        return (choice(PRE_SWEAR) + choice(POST_WORD))
    else:
        return (choice(PRE_WORD) + choice(POST_SWEAR))


def swear():
    if randint(0,2) < 2:
        return '{} {}'.format(adjective(), noun())
    else:
        return (choice(PRE_WORD) + choice(POST_SWEAR))


@app.route("/")
def home():
    return render_template('index.html', swear=swear().upper())


def main():
    debug = os.getenv('DEBUG', 'FALSE').strip().lower() in ['on', 'true', 'yes', '1', 'aye']
    port = int(os.getenv('PORT', '5000'))
    app.run(host='0.0.0.0', port=port, debug=debug)
