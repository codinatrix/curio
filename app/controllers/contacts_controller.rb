#!/bin/env ruby
# encoding: utf-8
class ContactsController < ApplicationController

  def new
    @message = String.new
  end

  def create
    @message= (params[:message])
    if !@message.blank?
      ContactMailer.contact_msg(@message).deliver
      redirect_to(root_url, :notice => "Tack så mycket! Ditt meddelande har skickats.")
    else
      flash[:error] = "Var snäll och skriv i alla fälten."
      render :new
    end
  end

end