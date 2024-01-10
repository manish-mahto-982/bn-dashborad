import { Box, Divider, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { FaUsers } from "react-icons/fa6";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FlexBoxBetween from "src/components/common/FlexBoxBetween";
import GridContainerScreen from "src/components/grid/GridContainerScreen";
import { gridSpacing } from "src/app/constant";
import RoundedBox from "src/components/common/RoundedBox";
import HighLightCard from "src/components/client-service/HighLightCard";
function InductionFlow() {
  const theme = useTheme();

  return (
    <GridContainerScreen>
      <Grid item xs={12} sx={{ xs: { mb: 1 }, lg: { mb: 2 } }}>
        <Typography variant="subtitle1" color={theme.palette.primary[300]}>
          Quick Summary
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <Grid
            container
            style={{
              borderRadius: 10,
            }}
            rowGap={3}
          >
            {quickSummaryData.map((itm) => (
              <Grid
                padding={2}
                display={"flex"}
                justifyContent={"center"}
                borderRadius={2}
                position={"relative"}
                sx={{
                  ":hover": {
                    bgcolor:
                      theme.palette.mode === "dark"
                        ? "rgba(67, 81, 89, 0.16)"
                        : "rgba(67, 81, 89, 0.06)",
                    transition: "linear",
                    transitionDuration: "300ms",
                    cursor: "pointer",
                  },
                }}
                key={itm.title}
                item
                xs={4}
                md={2}
              >
                <Card title={itm.title} number={itm.number} />
                <Divider style={{ height: "100%" }} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" color={theme.palette.primary[300]}>
              Induction flow till 1st session
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <RoundedBox p={2} >
              <Grid container xs={12}>
                <Grid item xs={4}>
                 <HighLightCard/>
                </Grid>
                <Grid item xs={8}>
                  <Box></Box>
                  <Box></Box>
                </Grid>
              </Grid>
            </RoundedBox>
          </Grid>
        </Grid>
      </Grid>
    </GridContainerScreen>
  );
}

export default InductionFlow;

const Card = ({ title, number }) => {
  return (
    <FlexBoxBetween>
      <Box>
        <FlexBoxBetween justifyContent={"start"} columnGap={2} padd>
          <PersonOutlineOutlinedIcon />
          <Typography fontSize={16} fontWeight={600} variant="subtitle1">
            {number}
          </Typography>
        </FlexBoxBetween>
        <Typography fontSize={16} fontWeight={600} variant="subtitle1">
          {title}
        </Typography>
      </Box>
    </FlexBoxBetween>
  );
};

const quickSummaryData = [
  {
    title: "Total Active Client",
    number: 3000,
  },
  {
    title: "Not Started",
    number: 3000,
  },
  {
    title: "Cleanse Active",
    number: 80,
  },
  {
    title: "Active",
    number: 50,
  },
  {
    title: "On Hold",
    number: 39,
  },
  {
    title: "Dormant",
    number: 20,
  },
];
