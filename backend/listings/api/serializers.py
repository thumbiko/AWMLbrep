###from rest_framework import serializers
#from listings.models import Listing

#class ListingSerializer(serializers.ModelSerializer):
   # class Meta:
    #    model = Listing
      #  fields = '__all__' */ # Serialize all fields in the Listing model


from rest_framework_gis.serializers import GeoModelSerializer
from listings.models import Listing

class ListingSerializer(GeoModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'
