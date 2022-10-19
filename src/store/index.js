import { createStore } from 'vuex'
import { contactService } from '../services/contact.service'

const storeOptions = {
    strict: true,
    state() {
        return {
            contacts: [],
            contact: null,
        }
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        remove(state, { contactId }) {
            const idx = state.contacts.findIndex(contact => contactId === contact._id)
            state.contacts.splice(idx, 1)
        },
        setContact(state, { contact }) {
            state.contact = contact
        },
        saveContact(state, {contact}) {
            const idx = state.contacts.findIndex(currContact => currContact._id === contact._id)
            state.contacts.splice(idx, 1, contact)
        }
    },
    actions: {
        async loadContacts({ commit }) {
            const contacts = await contactService.getContacts()
            commit({ type: 'setContacts', contacts })
        },
        async loadContact({ commit }, { id }) {
            const contact = await contactService.getContactById(id)
            commit({ type: 'setContact', contact })
        },
        async removeContact({ commit }, { contactId }) {
            await contactService.deleteContact(contactId)
            commit({ type: 'remove', contactId })
        },
        async saveContact({commit}, {contact}) {
            await contactService.saveContact(contact)
            commit({type:'saveContact', contact})
        }
    },
    getters: {
        contacts(state) {
            return state.contacts
        },
        contact(state) {
            return state.contact
        }
    },
    modules: {

    }
}

const store = createStore(storeOptions)
export default store