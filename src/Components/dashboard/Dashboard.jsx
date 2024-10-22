import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Modal, Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Dashboard.scss';


export default function Dashboard() {
    const [api, setAPI] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editId, setEditId] = useState(null);
    const baseURL = 'https://67072be1a0e04071d2294a60.mockapi.io/players';
    const categories = [
        {id: 'Dendrobium', name: 'Dendrobium'},
        {id: 'Brassavola', name: 'Brassavola'},
        {id: 'Cattleya', name: 'Cattleya'}
    ];

    const fetchAPI = () => {
        fetch(baseURL)
            .then(resp => resp.json())
            .then(data => setAPI(data))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    const handleDelete = (id) => {
        fetch(baseURL + '/' + id, { method: 'DELETE' })
            .then(() => fetchAPI())
    }

    const handleClose = () => {
        setShowModal(false);
        setEditId(null);
        formik.resetForm();
    };

    const handleShow = (orchid = null) => {
        if (orchid) {
            setEditId(orchid.id);
            formik.setValues({
                orchidName: orchid.orchidName,
                description: orchid.description || '',
                category: orchid.category,
                isNatural: orchid.isNatural,
                isAttractive: orchid.isAttractive,
                image: orchid.image
            });
        } else {
            setEditId(null);
            formik.resetForm();
        }
        setShowModal(true);
    };

    const formik = useFormik({
        initialValues: {
            orchidName: '',
            description: '',
            image: '',
            category: '',
            isNatural: false,
            isAttractive: false
        },
        validationSchema: Yup.object({
            orchidName: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
            description: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
            image: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
            category: Yup.string().required("Required.")
        }),
        onSubmit: values => {
            const method = editId ? 'PUT' : 'POST';
            const url = editId ? `${baseURL}/${editId}` : baseURL;

            fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            }).then(() => {
                handleClose();
                toast.success(editId ? 'Update successfully' : 'Create successfully');
                fetchAPI();
            });
        },
    });

    return (
        <div>
            <ToastContainer />
            <Button variant="primary" onClick={() => handleShow()}> <i className="bi bi-file-earmark-plus"></i>Add Orchid</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Natural</th>
                        <th>Category</th>
                        <th>Attractive</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {api.map((a) =>
                        <tr key={a.id}>
                            <td><img src={a.image} alt="orchid" style={{ width: '100px', height: '100px' }} /></td>
                            <td>{a.orchidName}</td>
                            <td>{a.isNatural ? 'Yes' : 'No'}</td>
                            <td>{a.category}</td>
                            <td>{a.isAttractive ? 'Yes' : 'No'}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleShow(a)}><i className="bi bi-pencil"></i> </Button>  
                                <Button variant="danger"  onClick={() => { if (window.confirm('Do you want to delete?')) handleDelete(a.id) }}>
                                    <i className="bi bi-trash3-fill"></i>  
                                </Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{editId ? 'Edit Orchid' : 'Add Orchid'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group controlId="orchidName">
                            <Form.Label>Orchid Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Orchid name"
                                {...formik.getFieldProps('orchidName')}
                            />
                            {formik.touched.orchidName && formik.errors.orchidName ? (
                                <div className="error">{formik.errors.orchidName}</div>
                            ) : null}
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Description"
                                {...formik.getFieldProps('description')}
                            />
                            {formik.touched.description && formik.errors.description ? (
                                <div className="error">{formik.errors.description}</div>
                            ) : null}
                        </Form.Group>
                        <Form.Group controlId="category">
                            <Form.Label>Category</Form.Label>
                            <Form.Select {...formik.getFieldProps('category')}>
                                <option value="">Select a category</option>
                                {categories.map((c) => (
                                    <option key={c.id} value={c.id}>{c.name}</option>
                                ))}
                            </Form.Select>
                            {formik.touched.category && formik.errors.category ? (
                                <div className="error">{formik.errors.category}</div>
                            ) : null}
                        </Form.Group>
                        <Form.Group controlId="isNatural">
                            <Form.Check
                                type="checkbox"
                                label="Is Natural"
                                {...formik.getFieldProps('isNatural')}
                            />
                        </Form.Group>
                        <Form.Group controlId="isAttractive">
                            <Form.Check
                                type="checkbox"
                                label="Is Attractive"
                                {...formik.getFieldProps('isAttractive')}
                            />
                        </Form.Group>
                        <Form.Group controlId="image">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Image URL"
                                {...formik.getFieldProps('image')}
                            />
                            {formik.touched.image && formik.errors.image ? (
                                <div className="error">{formik.errors.image}</div>
                            ) : null}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={formik.handleSubmit}>
                        {editId ? 'Update' : 'Save'} Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}