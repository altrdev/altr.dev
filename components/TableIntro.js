import {createStyles, makeStyles, Table, TableBody, TableCell, TableRow} from "@material-ui/core";
import Obfuscate from "react-obfuscate";

const useStyles = makeStyles(theme => {
    return createStyles({
        table: {
            marginTop: theme.spacing(1),
            tableLayout: "fixed"
        },
        tableCell: {
            borderBottom: 0,
            paddingLeft: 0,
            lineHeight: 1.5,
            fontSize: "1rem",
            '& a':{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                display: "block"
            }
        },
        tableRow: {
            height: 30
        }
    })
});

const TableIntro = ({...props}) => {
    const classes = useStyles();
    return (
        <Table className={classes.table}>
            <TableBody>
                {props.floatingIntro.tableRows.map(row => (
                    <TableRow key={row.id} className={classes.tableRow}>
                        <TableCell component="th" scope="row" style={{fontWeight: 900, width: 100}}
                                   className={classes.tableCell}>
                            {row.label}
                        </TableCell>
                        <TableCell align="left" className={classes.tableCell}>
                            { row.label === "Email" ? <Obfuscate email={row.value}/> : row.value }
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default TableIntro;
