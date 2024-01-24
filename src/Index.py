import tornado.web

class Handler(tornado.web.RequestHandler):
    def get(self):
        self.write('<a href="/casino">Go to Casino</a>')