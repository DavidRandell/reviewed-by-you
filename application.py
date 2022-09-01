from flask import Flask, render_template, request

application = Flask(__name__)
app = application

@app.route('/')

def index():
    return render_template("index.html")

def movie():
    return render_template("movie.html")

if __name__ == "__main__":
    app.run()