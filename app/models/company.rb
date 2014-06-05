class Company < ActiveRecord::Base
  has_many :products
  
  validates_presence_of :name, :address, :latitude, :longitude
  
  geocoded_by :address
  after_validation :geocode 
end
