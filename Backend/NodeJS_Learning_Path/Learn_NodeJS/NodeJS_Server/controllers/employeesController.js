const data = {
    // Import all the employees from the employees.json file.
    employees: require('../model/employees.json'),
    // A function to update the employees property of this object.
    setEmployees: function (data) {this.employees = data}

};

// Function to get all the employees currently in the file.
// This controller uses a GET route.
const getAllEmployees = (req, res) => {
    // Send the json as such
    res.json(data.employees);
};

// This function creates a new employee.
// This controller uses a POST route.
const createNewEmployee = (req, res) => {
    // Create a new employee object.
    // The employee details are obtained from the request body.
    const newEmployee = {
        id: data.employees[data.employees.length - 1].id + 1 || 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname 
    }

    if (!newEmployee.firstname || !newEmployee.lastname) {
        return res.status(400).json({'message': 'First and Last names are mandatory.'});
    }

    // Combine the newEmployee object with data.employees using the spread operator.
    // Update the employees database with the new employee
    data.setEmployees([...data.employees, newEmployee]);
    // Send back response with Resource Successfully Created code and data.employees.
    res.status(201).json(data.employees);
};

// Function to edit an employee entry
const updateEmployee = (req, res) => {
    console.log("req.body.id in updateEmployee", req.body.id);
    // Find the employee to be updated
    // The anonymous function matches the ?? 
    const employee = data.employees.find(emp => emp.id == parseInt(req.body.id));
    console.log("employee in updateEmployee", employee);
    
    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.body.id} not found` });
    }

    // Update employee properties using data from the request body.
    if (req.body.firstname) employee.firstname = req.body.firstname;
    if (req.body.lastname) employee.lastname = req.body.lastname;

    // emp => emp.id !== parseInt(req.body.id) is an arrow function that takes a single parameter emp, 
    // representing each element (employee) in the data.employees array.
    // Only employees whose ids don't match the req.body.id will be in filteredArray.
    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
    // Add employee to filteredArray using the spread operator.
    const unsortedArray = [...filteredArray, employee];

    // Sort the array in ascending order. 
    data.setEmployees(unsortedArray.sort((a, b) => a.id > b.id ? 1: a.id < b.id ? -1 : 0 ));

    res.json(data.employees);

};

const deleteEmployee = (req, res) => {
    console.log("req.body.id in deleteEmployee", req.body.id);
    // emp => emp.id !== parseInt(req.body.id) is an arrow function that takes a single parameter emp, 
    // representing each element (employee) in the data.employees array.
    // Find the employee by matching his id with req.body.id.
    const employee = data.employees.find(emp => emp.id == parseInt(req.body.id));
    console.log("employee in deleteEmployee", employee);
    
    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.body.id} not found` });
W    }
    

    // Only employees whose ids don't match the req.body.id will be in filteredArray.
    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
    // Add filteredArray to setEmployees using the spread operator.
    // This updates the employees.json file.
    data.setEmployees([...filteredArray]);
    res.json(data.employees);
};

const getSingleEmployee = (req, res) => {
    // Get the employee id from the URL
    const { id } = req.params;
    console.log("id in getSingleEmployee", id);
    // Find the employee 
    const employee = data.employees.find(emp => emp.id == parseInt(id));
    console.log("employee in getSingleEmployee", employee);
    
    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.body.id} not found` });
    }
    
    res.json(employee);
};

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getSingleEmployee
};