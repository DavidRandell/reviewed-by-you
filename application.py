from flask import Flask, render_template, request

application = Flask(__name__)
app = application

@application.route('/')
def index():
    #title = "Reviewed By You"
    return render_template("index.html")

