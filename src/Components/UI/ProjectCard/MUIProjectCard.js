import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { AiFillGithub } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import "./ProjectCard.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MUIProjectCard(props) {
  const TagButton = styled(Button)(({ theme }) => ({
    color: "var(--secondary-color)",
    backgroundColor: "white",
    disabled: true,
    ":hover": {},
  }));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    // was 345
    // 194
    //405
    <Card
      sx={{
        width: props.cardWidth,
        minWidth: 345,
        minHeight: 620,
        "&:hover": {
          transform: "scale(1.05)",
          transition: "transform 0.5s ease-in-out",
          boxShadow: "0px 0px 10px var(--primary-color)",
        },
      }}
      id="MUI-Card"
    >
      <CardHeader
        title={props.title}
        style={{
          color: "var(--primary-color)",
        }}
      />
      <a href={props.link} target={"_blank"} rel="noreferrer">
        <CardMedia
          component="img"
          height="auto"
          image={props.image}
          alt={props.title}
          loading="lazy"
          width="100%"
          object-fit="contain"
        />
      </a>
      <CardContent>
        <Typography variant="body2" color="text.primary" id="MUI-description">
          {props.description}
        </Typography>
        <Typography paragraph align="left" minHeight="73px">
          {props.tags.map((tag) => (
            <TagButton
              disabled={true}
              key={tag}
              style={{
                cursor: "default",
                color: "var(--secondary-color)",
                backgroundColor: "white",
              }}
            >
              {tag},
            </TagButton>
          ))}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="github link">
          <div>
            <a href={props.github} target="_blank" rel="noreferrer">
              <AiFillGithub
                className="MUI-icon"
                style={{
                  color: "var(--secondary-color)",
                }}
              />
            </a>
          </div>
        </IconButton>
        <IconButton aria-label="live-demo">
          <div>
            <a href={props.link} target="_blank" rel="noreferrer">
              <RiComputerLine
                className="MUI-icon"
                style={{
                  color: "var(--secondary-color)",
                }}
              />
            </a>
          </div>
        </IconButton>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "fit-content",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                color: "var(--primary-color)",
              }}
            >
              {props.callToAction}
            </div>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              style={{
                color: "var(--primary-color)",
              }}
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </div>
        </div>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.tech_description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
