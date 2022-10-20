import { Grid } from "@mui/material";
import { FC } from "react";
import ProductCard from "../../component/common/productCard";
import SearchBox from "../../component/common/searchBox";

const Home: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {" "}
        <SearchBox />
      </Grid>

      {[...Array(10)].map((el, i) => {
        return (
          <Grid item xs={12} sm={4}>
            <ProductCard key={i} />{" "}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Home;
