import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { Buttons } from "../../components/common";
import { Layout } from "../../components/layout"
import { WithAuth } from "../../hoc"
import { useUsers } from "../../hooks";
import { User } from "../../types";

interface Column {
    id: 'name' | 'lastName' | 'email' | 'birthdate' | 'action';
    label: string;
    minWidth?: number;
    align?: 'right';
}

const columns: readonly Column[] = [
    { id: 'name', label: 'Nombre', minWidth: 170 },
    { id: 'lastName', label: 'Apellido', minWidth: 100 },
    {
        id: 'email',
        label: 'Email',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'birthdate',
        label: 'Fecha de nacimiento',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'action',
        label: '',
        minWidth: 170,
        align: 'right',
    }
];

interface Data {
    name: string;
    lastName: string;
    email: string;
    birthdate: string;
}

const createData = (
    name: string,
    lastName: string,
    email: string,
    birthdate: string,
): Data => {
    return { name, lastName, email, birthdate };
}

const rows = [
    createData('Alexandra', 'Quijano', '1324171354', '3287263'),
    createData('China', 'CN', '1403500365', '9596961'),
    createData('Italy', 'IT', '60483973', '301340'),
    createData('United States', 'US', '327167434', '9833520')
];

const Users = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [users, setUsers] = useState<User[]>([]);
    const {getUsers, deleteUserFb, listUsers} = useUsers()

    useEffect(() => {
        getUsers().then((data) => {
            setUsers(data)
        })
    }, [listUsers])

    const deleteUser = (id: string | undefined) => {
        deleteUserFb(id)
    }

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Layout>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((user: User) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={user.idDB}>
                                            {columns.map((column) => {
                                                if (column.id === 'action') {
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            <Buttons onClick={() => deleteUser(user.idDB)}>
                                                                Eliminar
                                                            </Buttons>
                                                        </TableCell>
                                                    )
                                                } else {
                                                    const value = user[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {value}
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
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Layout>
    )
}

export const UsersPage = WithAuth(Users)