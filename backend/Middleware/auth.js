// // middleware/auth.js
// const auth = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];
//     if (!token) return res.status(401).json({ message: "Unauthorized" });

//     const decodedData = jwt.verify(token, "aestechs");
//     req.userId = decodedData?.id;
//     req.userType = decodedData?.userType;

//     next();
//   } catch (error) {
//     console.log(error);
//     res.status(401).json({ message: "Unauthorized" });
//   }
// };

// export default auth;
