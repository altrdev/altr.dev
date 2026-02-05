import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Obfuscate from "react-obfuscate";

const TableIntro = ({...props}) => {
    const theme = useTheme();

    const tableStyle = {
        marginTop: theme.spacing(1),
        tableLayout: "auto",
        width: 'auto'
    };

    const tableCellStyle = {
        borderBottom: 0,
        paddingLeft: 0,
        lineHeight: 1.5,
        fontSize: "1rem",
        wordBreak: 'break-word',
        '& a':{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            display: "block"
        }
    };

    const tableRowStyle = {
        height: 30
    };

    return (
        <Table sx={tableStyle}>
            <TableBody>
                {props.floatingIntro.tableRows.map(row => (
                    <TableRow key={row.id} sx={tableRowStyle}>
                        <TableCell component="th" scope="row" sx={{...tableCellStyle, fontWeight: 900}}>
                            {row.label}
                        </TableCell>
                        <TableCell align="left" sx={tableCellStyle}>
                            { row.label === "Email" ? <Obfuscate email={row.value}/> : row.value }
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default TableIntro;
