from django.core.files import File
from io import BytesIO
import PIL
from django.contrib.gis.db import models
from django.utils import timezone
from django.contrib.gis.geos import Point

from django.contrib.auth import get_user_model

# Define User model to handle relationships
User = get_user_model()

# Choices for various fields
CHOICES_AREA = (
    ('Inner London', 'Inner London'),
    ('Outer London', 'Outer London'),
)

CHOICES_LISTING_TYPE = (
    ('House', 'House'),
    ('Apartment', 'Apartment'),
    ('Office', 'Office'),
)

CHOICES_PROPERTY_STATUS = (
    ('Sale', 'Sale'),
    ('Rent', 'Rent'),
)

CHOICES_RENTAL_FREQUENCY = (
    ('Day', 'Day'),
    ('Week', 'Week'),
    ('Month', 'Month'),
)

CHOICES_POI_TYPE = (
    ('University', 'University'),
    ('Hospital', 'Hospital'),
    ('Stadium', 'Stadium'),
)

# Function to compress images before saving
def compress(picture):
    if picture:
        pic = PIL.Image.open(picture)
        buf = BytesIO()
        pic.save(buf, 'JPEG', quality=35)
        new_pic = File(buf, name=picture.name)
        return new_pic
    return None

# Listing model
class Listing(models.Model):
    seller = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    title = models.CharField(max_length=150)
    description = models.TextField(null=True, blank=True)
    area = models.CharField(max_length=20, choices=CHOICES_AREA, blank=True, null=True)
    borough = models.CharField(max_length=50, blank=True, null=True)
    listing_type = models.CharField(max_length=20, choices=CHOICES_LISTING_TYPE)
    property_status = models.CharField(max_length=20, choices=CHOICES_PROPERTY_STATUS, blank=True, null=True)
    price = models.DecimalField(max_digits=50, decimal_places=0)
    rental_frequency = models.CharField(max_length=20, choices=CHOICES_RENTAL_FREQUENCY, blank=True, null=True)
    rooms = models.IntegerField(blank=True, null=True)
    furnished = models.BooleanField(default=False)
    pool = models.BooleanField(default=False)
    elevator = models.BooleanField(default=False)
    cctv = models.BooleanField(default=False)
    parking = models.BooleanField(default=False)
    date_posted = models.DateTimeField(default=timezone.now)
    
    latitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)


    location = models.PointField(srid=4326, blank=True, null=True)

    # Images for the listing
    picture1 = models.ImageField(blank=True, null=True, upload_to="pictures/%Y/%m/%d/")
    picture2 = models.ImageField(blank=True, null=True, upload_to="pictures/%Y/%m/%d/")
    picture3 = models.ImageField(blank=True, null=True, upload_to="pictures/%Y/%m/%d/")
    picture4 = models.ImageField(blank=True, null=True, upload_to="pictures/%Y/%m/%d/")
    picture5 = models.ImageField(blank=True, null=True, upload_to="pictures/%Y/%m/%d/")

    def __str__(self):
        return self.title

    # Overriding the save method to compress images before saving
    def save(self, *args, **kwargs):
        self.picture1 = compress(self.picture1)
        self.picture2 = compress(self.picture2)
        self.picture3 = compress(self.picture3)
        self.picture4 = compress(self.picture4)
        self.picture5 = compress(self.picture5)
        super().save(*args, **kwargs)

# Points of Interest (POI) model
class Poi(models.Model):
    name = models.CharField(max_length=120, blank=True, null=True)
    type = models.CharField(max_length=50, choices=CHOICES_POI_TYPE)
    location = models.PointField(srid=4326, blank=True, null=True)

    def __str__(self):
        return self.name
