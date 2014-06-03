class Product < ActiveRecord::Base
  belongs_to :company
  
  validates_presence_of :name, :company, :blurb, :description
end
