import { css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export const tableStyles = css`
/* --+--+-- general --+--+-- */

a, a:hover, a:visited, a:active {
  color: inherit;
  text-decoration: none;
}

a:hover {
  cursor: pointer;
}

/* --+--+-- table --+--+-- */

.er-education {
  color: var(--er-lightgreen);
}

.er-work {
  color: var(--er-darkblue);
}

.er-projects {
  color: var(--er-lightblue);
}

.er-publications {
  color: var(--er-darkgreen);
}

.experience-table {
  width: 100%;
  margin-top: 20px;

  height: 500px;
  overflow-y: scroll;
}

.experience-table a:hover .experience-row {
  transition: background-color 100ms linear;
}

.experience-table a:hover .experience-row:has(.er-education) {
  transition: 100ms linear;
  background-color: var(--er-lightgreen-tint);
}

.experience-table a:hover .experience-row:has(.er-work) {
  transition: 100ms linear;
  background-color: var(--er-darkblue-tint);
}

.experience-table a:hover .experience-row:has(.er-projects) {
  transition: 100ms linear;
  background-color: var(--er-lightblue-tint);
}

.experience-table a:hover .experience-row:has(.er-publications) {
  transition: 100ms linear;
  background-color: var(--er-darkgreen-tint);
}

.experience-table .experience-row {
  height: 40px;
  padding: 3px 10px;
  border-bottom: 1px dashed rgb(48, 50, 59, .4);

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  font-size: 16px;
}

.experience-row.last-row {
  border-bottom: none;
}

.experience-row .er-key {
  width: 5%;
  display: flex;
  justify-content: center;
}

.experience-row .er-date {
  width: 10%;
  display: flex;
  justify-content: center;
}

.experience-row .er-title {
  width: 45%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.experience-row .er-description {
  width: 33%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.experience-row .er-read-more {
  width: 5%;
  display: flex;
  justify-content: center;
}
`;