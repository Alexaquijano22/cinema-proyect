import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Buttons } from "../../components/common";
import { Layout } from "../../components/layout";
import { WithAuth } from "../../hoc";
import { useUsers } from "../../hooks";
import { User } from "../../types";

interface Column {
  id: "name" | "lastName" | "email" | "birthdate" | "action";
  label: string;
  minWidth?: number;
  align?: "center";
}

const columns: readonly Column[] = [
  { id: "name", label: "Nombre", minWidth: 170 },
  { id: "lastName", label: "Apellido", minWidth: 100 },
  {
    id: "email",
    label: "Email",
    minWidth: 170,
    align: "center",
  },
  {
    id: "birthdate",
    label: "Fecha de nacimiento",
    minWidth: 170,
    align: "center",
  },
  {
    id: "action",
    label: "",
    minWidth: 170,
    align: "center",
  },
];

const Users = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [users, setUsers] = useState<User[]>([]);
  const { getUsers, deleteUserFb, listUsers } = useUsers();

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, [listUsers]);

  const deleteUser = (id: string | undefined) => {
    deleteUserFb(id);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Layout>
      <Container sx={{ paddingTop: "6em" }}>
          <TableContainer color="secondary" component={Paper}>
            <Table stickyHeader aria-label="customized table">
              <TableHead >
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                     <Typography variant="h6">{column.label}</Typography>  
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {users
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user: User) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={user.idDB}
                      >
                        {columns.map((column) => {
                          if (column.id === "action") {
                            return (
                              <TableCell key={column.id} align={column.align}>
                                <Buttons color="primary"
                                    variant="contained" onClick={() => deleteUser(user.idDB)} text="Eliminar">
                                </Buttons>
                              </TableCell>
                            );
                          } else {
                            const value = user[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                <Typography>{value}</Typography>
                              </TableCell>
                            );
                          }
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
      </Container>
    </Layout>
  );
};

export const UsersPage = WithAuth(Users);
