const todo_models = require("../models/todo_models");

const getAll = async (req, res) => {
  try {
    const getAllTodos = await todo_models.find({});
    res.status(200).json({ success: true, data: getAllTodos });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const createNew = async (req, res) => {
  try {
    const newTodo = await todo_models.create(req.body);
    res.status(201).json({ success: true, data: newTodo });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getTodoWid = async (req, res) => {
  try {
    const { id: todoId } = req.params;
    const todoWid = await todo_models.findOne({ _id: todoId });
    if (!getTodoWid) {
      return res.status(404).json({ msg: "no task with this id" });
    }
    res.status(200).json({ success: true, data: todoWid });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateTodoWid = async (req, res) => {
  try {
    const updTodoWid = await todo_models.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updTodoWid) {
      return res.status(404).json({ msg: "no task with this id" });
    }
    res.status(200).json({ success: true, msg: "updated", data: updTodoWid });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const deleteTodoWid = async (req, res) => {
  try {
    const delTodoWid = await todo_models.findOneAndDelete({
      _id: req.params.id,
    });
    if (!delTodoWid) {
      return res.status(404).json({ msg: "no task with this id" });
    }
    res.status(200).json({ success: true, data: delTodoWid });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getAll,
  createNew,
  getTodoWid,
  updateTodoWid,
  deleteTodoWid,
};
