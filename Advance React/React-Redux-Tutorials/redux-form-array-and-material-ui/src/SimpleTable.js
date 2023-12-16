import React from "react";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "material-ui/Table";
import Paper from "material-ui/Paper";
import { getFormValues } from "redux-form";
import { connect } from "react-redux";

// give default value as our form is empty at first
const SimpleTable = ({ values = { members: [] } }) => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>First name</TableCell>
          <TableCell>Last name</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {values.members.map((member, index) => {
          return (
            <TableRow key={`${index}-${member.firstName}-${member.lastName}`}>
              <TableCell>{member.firstName}</TableCell>
              <TableCell>{member.lastName}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </Paper>
);

export default connect((state) => ({
  values: getFormValues("MyForm")(state),
}))(SimpleTable);

// https://redux-form.com/8.3.0/docs/api/selectors.md/
