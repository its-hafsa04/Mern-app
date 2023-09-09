// @desr Get Goals
// @route GET /api/goals
// @access Private
const getGoals = async (req,res)=>{
    res.status(200).json({message : 'Get goals'});
};

// @desr Set Goals
// @route POST /api/goals
// @access Private
const setGoals = async (req,res)=>{
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
      }

    res.status(200).json({message : 'Set goals'});
};

// @desr Update Goals
// @route PUT /api/goals/:id
// @access Private
const updateGoals = async (req,res)=>{
    res.status(200).json({message : `updated goals ${req.params.id}`});
};

// @desr delete Goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoals = async (req,res)=>{
    res.status(200).json({message : `deleted goals ${req.params.id}`});
};

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
};