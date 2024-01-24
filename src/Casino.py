import tornado.web

class CasinoHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("roulette.html")