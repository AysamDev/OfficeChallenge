//write your code here to make the tests pass

class Document{
    constructor(EmployeeName)
    {
        this.EmployeeName = EmployeeName
    }

}

class Employee{
    constructor(name)
    {
        this.name = name
    }

    work(office)
    {
        for(let i = 0;i<10;i++)
        {
            const a = new Document(this.name)
            office.documents.push(a)
        }
    }
}

class Manager{
    constructor(name)
    {
        this.employees = []
        this.name = name
    }

    hireEmployee(name)
    {
        const a = new Employee(name)
        this.employees.push(a)
    }

    askEmployeesToWork (office)
    {
        for(let employee of this.employees)
        {
            employee.work(office)
        }
        
    }
}

class Cleaner
{
    constructor(name)
    {
        this.name = name
    }

    clean()
    {
        console.log("Clean")
    }
}

class Office{
    constructor()
    {
        this.documents = []
        this.managers = []
        this.cleaners = []
    }

    hireCleaner(name)
    {
        const a = new Cleaner(name)
        this.cleaners.push(a)
    }

    hireManager(name)
    {
        const a = new Manager(name)
        this.managers.push(a)
    }

    startWorkDay()
    {
     for(let manager of this.managers)
     {
        manager.askEmployeesToWork(this)
     }
     for(let cleaner of this.cleaners)
     {
         cleaner.clean()
     }

    }
}