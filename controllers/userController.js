const Task = require('../models/task'); // Make sure this is actually the Task model, not "user"

exports.getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find();
    res.status(200).json(allTasks);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

exports.getATask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }
    res.status(200).json({ msg: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
          });
                  if (!task) {
        return res.status(404).json({ msg: "Task not found" });
      }
      res.status(200).json({ msg: "Task upadted successfully" , task })
    } catch (err) {
      res.status(500).json({ msg: "Server error", error: err.message });
    }
  };

exports.makeATask = async (req, res) => {
  try {
    const body = req.body
    if (!body || !body.task ) {
        return res.status(400).json({ msg: "All required fields must be filled." });
      }
      const result = await Task.create({
       task: body.task
      });
    
      res.status(201).json({ msg: "Task created successfully.", result });
  } catch (err) {
    res.status(500).json({msg:"task created succesfully", result})
  }
};