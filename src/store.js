import {writable} from "svelte/store"

const create_writable_store = (key, start_value) => {
	const {subscribe, set} = writable(start_value)

	return {
		subscribe,
		set,
		use_local_storage: () => {
			const json = localStorage.getItem(key)
			if (json) {
				set(JSON.parse(json))
			}

			subscribe((current) => {
				localStorage.setItem(key, JSON.stringify(current))
			})
		},
	}
}

export const light_mode = create_writable_store("light_mode", true)
export const access_token = create_writable_store("access_token", false)
export const refresh_token = create_writable_store("refresh_token", false)
export const user = create_writable_store("user", false)
