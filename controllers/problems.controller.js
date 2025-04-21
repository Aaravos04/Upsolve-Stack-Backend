import Problem from "../models/problem.model.js";

const getAllData = async (req, res) => {
  try {
    const data = await Problem.find();
    res.status(200).json({
      success: true,
      message: "Data Recieved!",
      data: data,
    });
  } catch (err) {
    console.log(err?.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
      error: err?.message,
    });
  }
};

const getProblemData = async (req, res) => {
  const { id } = req.params;
  try {
    const problem = await Problem.findById(id);
    if (!problem) {
      return res.status(400).json({
        success: false,
        message: "Problem doesn't exist!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Problem details recieved!",
      data: problem,
    });
  } catch (err) {
    console.log(err?.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
      error: err?.message,
    });
  }
};

const addProblemData = async (req, res) => {
  const { name, link, platform, category } = req.body;
  try {
    if (!name || !link || !platform || !category) {
      return res.status(400).json({
        success: false,
        message: "All fields required.",
      });
    }
    
    const exists = await Problem.findOne({ name, link });
    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Problem already exists!",
      });
    }
    
    const problem = new Problem({ name, link, platform, category });
    await problem.save();

    res.status(201).json({
      success: true,
      message: "Problem Saved!",
      data: problem,
    });
  } catch (err) {
    console.log(err?.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
      error: err?.message,
    });
  }
};

const updateProblemData = async (req, res) => {
  const { id } = req.params;
  const { updates } = req.body;
  try {
    const updated = await Problem.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(400).json({
        success: false,
        message: "Problem doesn't exist!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Problem updated successfully!",
      data: updated,
    });
  } catch (err) {
    console.log(err?.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
      error: err?.message,
    });
  }
};

const deleteProblemData = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Problem.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(400).json({
        success: false,
        message: "Problem doesn't exist!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Problem deleted successfully!",
      data: deleted,
    });
  } catch (err) {
    console.log(err?.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
      error: err?.message,
    });
  }
};

export {
  getAllData,
  getProblemData,
  addProblemData,
  updateProblemData,
  deleteProblemData,
};
