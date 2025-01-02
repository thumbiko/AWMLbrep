from django import forms
from listings.models import Listing
from django.contrib.gis.geos import Point


class ListingForm(forms.ModelForm):
    latitude = forms.FloatField(required=False)
    longitude = forms.FloatField(required=False)

    class Meta:
        model = Listing
        fields = ['title', 'description', 'area', 'borough', 'listing_type', 'property_status', 
                  'price', 'rental_frequency', 'rooms', 'furnished', 'pool', 'elevator', 'cctv', 
                  'parking', 'date_posted', 'location', 'latitude', 'longitude', 'picture1', 'picture2', 'picture3', 
                  'picture4', 'picture5']  # Use correct field names from the model

    def clean(self):
        data = super().clean()
        latitude = data.get('latitude')
        longitude = data.get('longitude')

        if latitude and longitude:
            # If latitude and longitude are provided, create a Point object for location
            data['location'] = Point(longitude, latitude, srid=4326)
        
        return data
