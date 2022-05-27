const express = require("express");
const app = express();
const cors = require("cors");
const poolInfoRouter = require("./pool_info");
const poolStakeRouter = require("./pool_stake")
const poolVolRouter = require("./pool_vol")

app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: false, limit: "100mb" }));

app.use(poolInfoRouter);
app.use(poolStakeRouter);
app.use(poolVolRouter);


app.listen(6234);
