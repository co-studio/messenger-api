import request from 'request-promise'

const debug = require('debug')('messenger-api')
class Api {
  constructor(ACCESS_TOKEN) {
    this.ACCESS_TOKEN = ACCESS_TOKEN
    this.BASE_URL = 'https://graph.facebook.com/v2.8/'
  }

  subscribe = async () => {
    const res = await request({
      url: `${this.BASE_URL}/me/subscribed_apps`,
      qs: { access_token: this.ACCESS_TOKEN },
      method: 'POST'
    })
    if (res.error) {
      throw new Error(body.error)
    }
    else {
      debug(`Successfully subscribed to page: ${res}`)
    }
  }

  getUserProfile = async (id) => {
    return await request({
      url: `${this.BASE_URL}/${id}`,
      qs: {
        access_token: this.ACCESS_TOKEN,
        fields: 'first_name,last_name,profile_pic,locale,timezone,gender,is_payment_enabled'
      },
      method: 'GET',
      json: true
    })
  }

  sendReadReceipt = async (id) => {
    return await request({
      url: `${this.BASE_URL}/me/messages`,
      qs: { access_token: this.ACCESS_TOKEN },
      method: 'POST',
      json: {
        recipient: { id },
        sender_action: 'mark_seen'
      }
    })
  }

  sendTypingOn = async (id) => {
    return await request({
      url: `${this.BASE_URL}/me/messages`,
      qs: { access_token: this.ACCESS_TOKEN },
      method: 'POST',
      json: {
        recipient: { id },
        sender_action: 'typing_on'
      }
    })
  }

  sendTypingOff = async (id) => {
    return await request({
      url: `${this.BASE_URL}/me/messages`,
      qs: { access_token: this.ACCESS_TOKEN },
      method: 'POST',
      json: {
        recipient: { id },
        sender_action: 'typing_off'
      }
    })
  }
}

export default Api
