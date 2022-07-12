from flask import Flask, request
application = Flask(__name__, static_url_path='')

@application.route('/html/')
def root():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    application.run(debug=True)