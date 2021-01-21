import React from 'react'
import { withRouter } from "react-router-dom";
import { Breadcrumb } from 'react-bootstrap'
const Breadcrumbs = props => {
  const {
    history,
    location: { pathname }
  } = props;
  const pathnames = pathname.split("/").filter(x => x);
  return (
    <Breadcrumb>
      {pathnames.length > 0 ? (
        <Breadcrumb.Item onClick={() => history.push("/")} >Ana Sayfa</Breadcrumb.Item>
      ) : <Breadcrumb.Item active>Ana Sayfa</Breadcrumb.Item>}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length-1;
        return isLast ? (
          <Breadcrumb.Item  key={name} active>{name}</Breadcrumb.Item>
        ) : (
            <Breadcrumb.Item key={name} onClick={() => history.push(routeTo)} >
              {name}
            </Breadcrumb.Item>
          );
      })}
    </Breadcrumb>
  )

}
export default withRouter(Breadcrumbs);