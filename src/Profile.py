import tornado.web
import json
import base64

accountDatabase = {
    "alice": {
        "firstName": "Alice",
        "lastName": "Smith",
        "dateOfBirth": "Jan 1st",
        "email": "alice@example.com",
        "profpic": "/static/Profile1.png"
    },
    "bob": {
        "firstName": "Bob",
        "lastName": "Jones",
        "dateOfBirth": "Dec. 31st",
        "email": "bob@bob.xyz",
        "profpic": "/static/Profile2.png"
    },
    "carol": {
        "firstName": "Carol",
        "lastName": "Ling",
        "dateOfBirth": "Jul. 17th",
        "email": "carol@example.com",
        "profpic": "/static/Profile3.png"
    },
    "dave": {
        "firstName": "Dave",
        "lastName": "N. Port",
        "dateOfBirth": "Mar.14th",
        "email": "dave@dave.dave",
        "profpic": "/static/Profile4.png"
    }
}

class ProfileHandler(tornado.web.RequestHandler):
    def get(self):
        p = self.request.path       #ex: /profile/alice
        uname = p.split("/")[2]
        firstName = accountDatabase[uname]["firstName"]
        lastName = accountDatabase[uname]["lastName"]
        dob = accountDatabase[uname]["dateOfBirth"]
        email = accountDatabase[uname]["email"]
        profpic = accountDatabase[uname]["profpic"]

        self.render("profilepage.html",
                    firstName = firstName,
                    lastName = lastName,
                    dob = dob,
                    email = email,
                    profpic = profpic
                    )

    def post(self):
        J=json.loads(self.request.body)
        firstName = J["firstName"]
        lastName = J["lastName"]
        dob = J["dateOfBirth"]
        profpic = J["profpic"] #base64.b64decode
        print("WE GOT:",firstName,lastName,dob,profpic[:20])
        resp={"ok": True}
        self.write( json.dumps(resp) )


        p = self.request.path       #ex: /profile/alice
        uname = p.split("/")[2]

    
        if firstName != "":
            accountDatabase[uname]["firstName"] = firstName

        if lastName != "":
            accountDatabase[uname]["lastName"] = lastName

        if dob != "":
            accountDatabase[uname]["dateOfBirth"] = dob 
        if profpic != "":
            accountDatabase[uname]["profpic"] = "data:image/jpeg;base64," + profpic