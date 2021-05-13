import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { properties } from '../utils/properties';

const styles = theme => ({
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
});

class TableIntro extends Component {

    render(){
        const { classes } = this.props;
        return (
            <Table className={classes.table}>
                <TableBody>
                {properties.floatingIntro.tableRows.map(row => (
                    <TableRow key={row.id} className={classes.tableRow}>
                        <TableCell component="th" scope="row" style={{fontWeight: 800, width: 100}} className={classes.tableCell}>
                            {row.label}
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
