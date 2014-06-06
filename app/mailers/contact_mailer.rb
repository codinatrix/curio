class ContactMailer < ActionMailer::Base
    
     def contact_msg(full_message)
         mail(:to => ENV['ADMINEMAIL'],
              :subject => 'Curio tip',
              :from => 'tips@curio.nu',
              :body => full_message)
     end
end