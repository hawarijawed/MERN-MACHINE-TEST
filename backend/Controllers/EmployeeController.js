const Employee = require('../Models/Employee');

exports.createEmployee = async (req, res) =>{
    const employeeData = { ...req.body, image: req.file.path};
    const employee = await Employee.create(employeeData);
    res.status(201).json(employee);
};

// Get all employees
exports.getEmployees = async (req, res) => {
    try {
      const employees = await Employee.find();
      res.json(employees);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching employees', error: error.message });
    }
};

exports.updateEmployee = async (req, res) =>{
    const {id} = req.params;
    const updateData = req.params;
    const employee = await Employee.findByIdAndUpdate(id, updateData,{
        new:true
    });
    res.json(employee);
};

exports.deleteEmployee = async (req, res) =>{
    const {id} = req.params;
    await Employee.findByIdAndDelete(id);
    res.status(204).send();
};