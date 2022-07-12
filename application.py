from flask import Flask
application = Flask(__name__)

@application.route('/')
def hello_world():
    return 'Hello World, this is deployed to Elastic Beanstalk through an AWS pipeline'