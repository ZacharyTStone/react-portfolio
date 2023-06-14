import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function BlogCard({
	link,
	image,
	title,
}: {
	link: string;
	image: string;
	title: string;
}) {
	return (
		<Card
			sx={{
				backgroundColor: "transparent",
				color: "var(--off-white)",
				minWidth: "250px",
				height: "fit-content",
				margin: "10px",
				borderRadius: "10px",
				opacity: 0.9,
				backgroundImage: "linear-gradient(to bottom, #00000080, #00000040)",
				// border: "1px solid var(--secondary-color)",
			}}
		>
			<CardActionArea href={link} target="_blank">
				<CardMedia
					component="img"
					height={300}
					image={image}
					alt="blog post image"
					loading="lazy"
					style={{
						filter: "brightness(0.75)",
						borderRadius: "10px 10px 0 0",
					}}
				/>
				<CardContent
					style={{
						minHeight: "100px",
						borderRadius: "0 0 10px 10px",
					}}
				>
					<Typography
						variant="h5"
						component="div"
						style={{
							color: "var(--off-white)",
						}}
					>
						{title}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
