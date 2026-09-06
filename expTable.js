import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { tableStyles } from './expTableStyles.js';

/**
 * TODOs
 * clean up stylesheets (both js and css)
 * https://stackoverflow.com/questions/48380267/css-variables-root-vs-host
 * clean up js folders / files
 * 
 * add ability to filter options based on selecting key
 * remove bottom border for final item
 * add all items to data object
 */

const loadExperienceList = (list) => {
  return list;
}

export class ExperienceTable extends LitElement {
  static properties = {
    filter: ''
  }

  constructor() {
    super();
    this.filter = '';
  }

  static styles = [
    tableStyles
  ]

  experienceItems() {
    let tableHTML = ``
    const items = loadExperienceList(experienceList);
    for (const item of items) {
      let rowKey
      switch (item.type) {
        case 'education':
          rowKey = '✦'
          break;
        case 'work':
          rowKey = '❋'
          break;
        case 'projects':
          rowKey = '✷'
          break;
        case 'publications':
          rowKey = '✣'
          break;
      }

      let experienceRow
      if (item?.link) {
        experienceRow = html`<a href="${item.link}" target="_blank"><div class="experience-row" id="${item.id}">
          <div class="er-key er-${item.type}">${rowKey}</div>
          <div class="er-date">${item.date}</div>
          <div class="er-title">${item.title}</div>
          <div class="er-description">${item.description}</div>
          <div class="er-read-more">→</div>
        </div></a>`;
      } else {
        experienceRow = html`<div class="experience-row" id="${item.id}">
          <div class="er-key er-${item.type}">${rowKey}</div>
          <div class="er-date">${item.date}</div>
          <div class="er-title">${item.title}</div>
          <div class="er-description">${item.description}</div>
          <div class="er-read-more"></div>
        </div>`;
      }

      tableHTML = [tableHTML, experienceRow]

      // tableHTML = [tableHTML, ...experienceRow]
    }

    return html`${tableHTML}`
  }

  render() {
    const exp = this.experienceItems()
    console.log('exp ', exp)
    return html`
      <div class="experience-table">
        ${this.experienceItems()}
      </div>
    `;
  }
}

customElements.define('experience-table', ExperienceTable);

/**
 *   {
    "id": "",
    "type": "",
    "date": "",
    "title": "",
    "description": ""
  },
 */

const experienceList = [
  {
    "id": "edu-ma",
    "type": "education",
    "date": "2027",
    "title": "MA Philosophy",
    "description": "KU Leuven, Belgium"
  },
  {
    "id": "work-sefi",
    "type": "work",
    "date": "2025–",
    "title": "Communications Assitant, Web Developer",
    "description": "European Society for Engineering Education (SEFI)"
  },
  {
    "id": "project-yummy",
    "type": "projects",
    "date": "2026",
    "title": "yummy meals",
    "description": "cook with friends. no cooking on mobile!",
    "link": "https://mwhite98.github.io/yummy-meal/"
  }
]
