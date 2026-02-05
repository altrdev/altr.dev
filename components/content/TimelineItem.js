import { Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const TimelineItem = ({...props}) => {
    const theme = useTheme();

    const eventStyle = {
        borderBottom: "1px solid rgba(160, 160, 160, 0.2)",
        paddingBottom: 15,
        marginBottom: 20,
        position: "relative"
    };

    const companyStyle = {
        fontWeight: 600,
        color: theme.palette.text.secondary
    };

    const titleStyle = {
        fontWeight: 600,
        marginBottom: theme.spacing(1)
    };

    const dateStyle = {
        fontWeight: 400,
        color: theme.palette.text.secondary,
        float: 'right',
        textAlign: 'right'
    };

    return (

        <li style={eventStyle} className="timeline-event">
            <Typography variant="subtitle1" sx={companyStyle}>{props.company}</Typography>
            <Typography variant="h5" sx={titleStyle}>
                {props.title}
                <Typography variant="subtitle1" component="span" sx={dateStyle}>{props.date}</Typography>
            </Typography>
            <Typography variant="body1" style={{whiteSpace: "pre-wrap"}}>{props.description}</Typography>
        </li>

    );

}

export default TimelineItem;
















/*

<div class="row">
        <div class="col s12 m12 l12">
          <ul class="timeline">
            <li class="event">
              <h3>Management and Entreprenurship (MSc)</h3>
              <p>
                This September 2015 I will begin an MSc in Management and Entrepreneurship at University of Sussex, to broaden my knowledge and gain skills necessary for my future in business and management.
              </p>
            </li>
          </ul>
        </div>
      </div>

 */
