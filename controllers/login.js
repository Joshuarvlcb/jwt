//login function
const login = (req, res) => {
  res.staus(200).json({ status: 200, msg: "success" });
};

//dashboard function returns a josn its sucess

const dashboard = (req, res) => {
  res.json({
    status: 200,
    msg: "success",
  });
};
