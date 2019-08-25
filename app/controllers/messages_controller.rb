class MessagesController < ApplicationController

  def new
  	@messages = Message.all
  end

  def create
  	@message = Message.new(params.require(:message).permit(:text))
 
  	@message.save
  	render 'new'
  end

end