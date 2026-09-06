import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { tableStyles } from './expTableStyles.js';
import { experienceList } from './expList.js';

/**
 * TODOs
 * make list vertical shorter on mobile
 * make table height dynamic based on number of filtered items?
 */

const navList = document.getElementsByClassName('table-key-nav')
const navArray = Array.from(navList)

const filterExperienceList = (filter) => {
  return experienceList.filter(exp => `er-${exp.type}` === filter)
}

export class ExperienceTable extends LitElement {
  static properties = {
    listItems: {},
  }

  constructor() {
    super();
    this.listItems = experienceList;
  }

  static styles = [
    tableStyles
  ]

  _handleNavSelection(navButton) {
    if (navButton.classList.contains('active')) {
      // Unselect the currently active button, make all buttons clickable, and show the unfiltered list of experience
      navArray.forEach(otherButton => {
        otherButton.classList.remove('inactive')
        otherButton.classList.remove('active')
      })
      this.listItems = experienceList
    } else {
      // Only one button is active / clickable. Experience items shown are filtered based on this button
      navArray.forEach(otherButton => {
        otherButton.classList.remove('active')
        otherButton.classList.add('inactive')
      })

      navButton.classList.remove('inactive')
      navButton.classList.add('active')

      navButton.classList.forEach(c => {
        if (c.includes('er-')) {
          this.listItems = filterExperienceList(c);
        }
      })
    }
  }

  _styleLastRow () {

  }

  connectedCallback() {
    super.connectedCallback();

    navArray.forEach(navButton => {
      navButton.addEventListener('click', () => { this._handleNavSelection(navButton) })
    })
  }

  disconnectedCallback() {
    navArray.forEach(navButton => {
      navButton.removeEventListener('click', () => { this._handleNavSelection(navButton) })
    })

    super.disconnectedCallback();
  }

  experienceItems() {
    let tableHTML = ``
    const items = this.listItems;
    for (const item of items) {
      let lastItem = ''
      if (item === items[items.length - 1]) {
        lastItem = 'last-row'
      }

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

      const mainContent = html`<div class="er-key er-${item.type}">${rowKey}</div>
        <div class="er-date">${item.date}</div>
        <div class="er-title">${item.title}</div>
      <div class="er-description">${item.description}</div>`

      let experienceRow
      if (item?.link) {
        experienceRow = html`<a href="${item.link}" target="_blank"><div class="experience-row ${lastItem}" id="${item.id}">
          ${mainContent}
          <div class="er-read-more">→</div>
        </div></a>`;
      } else {
        experienceRow = html`<div class="experience-row ${lastItem}" id="${item.id}">
          ${mainContent}
          <div class="er-read-more"></div>
        </div>`;
      }

      tableHTML = [tableHTML, experienceRow]
    }

    return html`${tableHTML}`
  }

  render() {
    const exp = this.experienceItems()
    return html`
      <div class="experience-table">
        ${this.experienceItems()}
      </div>
    `;
  }
}

customElements.define('experience-table', ExperienceTable);
