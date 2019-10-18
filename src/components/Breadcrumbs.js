import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const BreadcrumbList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
`

const BreadcrumbListItem = styled.li`
  display: inline-block;
  color: black;

  &:not(:first-child)::before {
    content: "/";
    color: black;
    margin: 1ch;
  }

  &:last-child {
    color: grey;
  }
`

const Breadcrumbs = ({ breadcrumbs = [] }) => (
  <nav aria-label="Breadcrumb">
    <BreadcrumbList>
      {breadcrumbs.map(({ name, url }, i) => (
        <BreadcrumbListItem key={name}>
          <Link
            to={`/${url}`}
            aria-current={i === breadcrumbs.length - 1 ? "page" : null}
          >
            {name}
          </Link>
        </BreadcrumbListItem>
      ))}
    </BreadcrumbList>
  </nav>
)

export default Breadcrumbs
