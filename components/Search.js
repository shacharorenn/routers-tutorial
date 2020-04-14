import React from 'react';
import {Formik, Form, Field} from 'formik';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';

const Search = ({history,location}) => {
    const searchObj = queryString.parse(location.search);
    const handleSearch = (values) => {
        history.push(`/todo?search=${values.search}`);
    }

    return (
        <Formik
            initialValues={{search: searchObj.search}}
            onSubmit= {handleSearch}
        >
            <Form>
                <div className="form-group d-flex">
                    <Field
                        className="form-control mr-2"
                        placeholder="Search..."
                        type="search"
                        name="search"
                    />
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </Form>
        </Formik>
    )
}


export default withRouter(Search);