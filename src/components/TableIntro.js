import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Obfuscate from 'react-obfuscate'

const styles = theme => ({
    table: {
        marginTop: theme.spacing.unit,
        width: "auto"
    },
    tableCell: {
        borderBottom: 0,
        paddingLeft: 0,
        lineHeight: 1.5,
        fontSize: "1rem"
    },
    tableRow: {
        height: 30
    }
});

let id = 0;
function createData(title, value) {
  id += 1;
  return { id, title, value };
}

const rows = [
  createData("Age", 29),
  createData("Country", "Como Lake, Italy"),
  createData("Email", <Obfuscate email="alessandro.travi+dev@gmail.com"/>),
  createData("Website", "https://altr.dev")
];

class TableIntro extends Component {

    render(){
        const { classes } = this.props;
        return (
            <Table className={classes.table}>
                <TableBody>
                {rows.map(row => (
                    <TableRow key={row.id} className={classes.tableRow}>
                        <TableCell component="th" scope="row" style={{fontWeight: 800}} className={classes.tableCell}>
                            {row.title}
                        </TableCell>
                        <TableCell align="left" className={classes.tableCell}>
                            {row.value}
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        );
    }
  
}

TableIntro.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TableIntro);
