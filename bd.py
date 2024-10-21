from flask import Flask, render_template, request, redirect, url_for, flash
import sqlite3
import re

app = Flask(__name__)
app.secret_key = '12345'

def conectar_db():
    conectar = sqlite3.connect('banco.db')
    return conectar

