class Person:
    def __init__(self, name):
        self.name = name
    
    def greet(self):
        def doIt():
            print("hi, I'm " + self.name)

        doIt()

minky = Person("Momo")
minky.greet()