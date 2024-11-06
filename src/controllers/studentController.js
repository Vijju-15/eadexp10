// src/controllers/studentController.js
const Student = require('../models/Student');

const createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).send(students);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).send();
        res.status(200).send(student);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!student) return res.status(404).send();
        res.status(200).send(student);
    } catch (error) {
        res.status(400).send(error);
    }
};

const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) return res.status(404).send();
        res.status(200).send(student);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { createStudent, getAllStudents, getStudentById, updateStudent, deleteStudent };
