import tornado.web
import json
import base64

class Handler(tornado.web.RequestHandler):
    def post(self):
        J=json.loads(self.request.body)
        firstName = J["firstName"]
        lastName = J["lastName"]
        dob = J["birthDate"]
        profpic = base64.b64decode(J["profpic"])
        print("WE GOT:",firstName,lastName,dob,profpic[:20])
        resp={"ok": True}
        self.write( json.dumps(resp) )